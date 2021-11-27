require 'git'
require 'json'
require 'pathname'

module TestPlugin
  class TestGenerator < Jekyll::Generator
    safe true
    priority :lowest

    def generate(site)
      g = Git.open(site.source)
      site.collections['tools'].docs.each do |tool|
        if tool.data["title"] == "Tools"
          next
        end
        lc = g.log(1).object(tool.path).first
        #lcdate = lc.date.to_s
        lastcommit = lc.sha.to_s
        relsource = Pathname.new(tool.path).relative_path_from(Pathname.new(site.source)).to_s
        path = tool.destination( site.dest )
        path['.html'] = '.jsonld'
        relpath = Pathname.new(path).relative_path_from(Pathname.new(site.dest)).to_s
        FileUtils.mkdir_p(File.dirname(path))
        File.open(path, "w") do |f|
          test = {}
          test["@context"] = {
            :hat => "http:/cim.mcgill.ca/~juliette/authoring/taxonomy.jsonld#",
            :dcterms => "http://purl.org/dc/terms/"
          }
          test["@type"] = "hat:AuthoringTool"
          thisId = site.config["url"] + site.baseurl + "/" + relpath
          test["@id"] = thisId
          test["dcterms:title"] = tool.data["title"]
          test["hat:Year"] = tool.data["year"].to_i
          if tool.data["availability"] == "Proprietary" or tool.data["availability"] == "Unavailable"
            test["hat:Availability"] = { :@id => "hat:" + tool.data["availability"] }
          elsif tool.data["availability"] == "Source Available, Ambiguous License"
            test["hat:Availability"] = { :@id => "hat:SAAL" }
          elsif tool.data["availability"].include? "Open Source"
            tmp = tool.data["availability"].split("(")[1]
            tmp = tmp.split(")")[0]
            test["hat:Availability"] = {
              :@id => thisId + "#Availability",
              :@type => "hat:OpenSource",
              :@value => tmp
            }
          else
            puts tool.data["availability"]
          end
          test["hat:HapticCategory"] = tool.data["haptic_category"].map {|val|
            val.gsub! " ", ""
            { :@id => "hat:" + val }
          }
          test["hat:DrivingFeature"] = tool.data["driving_feature"].map {|val| { :@id => "hat:" + val }}
          test["hat:EffectLocalization"] = { :@id => "hat:" + tool.data["effect_localization"] }
          test["hat:DesignApproaches"] = tool.data["design_approaches"].map {|val|
            val.sub! "DPC", "DirectParametricControl"
            { :@id => "hat:" + val }
          }
          if tool.data["interaction_metaphors"].length > 0 and not tool.data["interaction_metaphors"].include?("None")
            test["hat:InteractionMetaphors"] = tool.data["interaction_metaphors"].map {|val|
              val.gsub! " ", ""
              { :@id => "hat:" + val}
            }
          end
          if tool.data["media_support"].length > 0 and not tool.data["media_support"].include?("None")
            test["hat:MediaSupport"] = tool.data["media_support"].map {|val| { :@id => "hat:" + val}}
          end
          test["dcterms:contributor"] = site.config["gh_edit_repository"] + "/blame/" + lastcommit + "/" + relsource
          test["dcterms:license"] = "https://creativecommons.org/licenses/by-sa/4.0/"
          #test["sdDatePublished"] = lcdate

          f.write(test.to_json)
        end
        site.keep_files << relpath
      end
    end
  end
end
