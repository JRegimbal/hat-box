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
        lc = g.log(1).object(tool.path).first
        lcdate = lc.date.to_s
        lastcommit = lc.sha.to_s
        relsource = Pathname.new(tool.path).relative_path_from(Pathname.new(site.source)).to_s
        path = tool.destination( site.dest )
        path['.html'] = '.json'
        relpath = Pathname.new(path).relative_path_from(Pathname.new(site.dest)).to_s
        FileUtils.mkdir_p(File.dirname(path))
        File.open(path, "w") do |f|
          test = {}
          test["@context"] = "http://schema.org/"
          test["@type"] = "CreativeWork"
          test["@id"] = site.config["url"] + site.baseurl + "/" + relpath
          test["name"] = tool.data["title"]
          test["datePublished"] = tool.data["year"]
          test["availableOnDevice"] = tool.data["hardware_abstraction"]
          test["sdPublisher"] = {
            :@type => "Organization",
            :name => "Various Project Contributors",
            :url => site.config["gh_edit_repository"] + "/blame/" + lastcommit + "/" + relsource
          }
          test["sdLicense"] = "https://creativecommons.org/licenses/by-sa/4.0/"
          test["sdDatePublished"] = lcdate

          f.write(test.to_json)
        end
        site.keep_files << relpath
      end
    end
  end
end
