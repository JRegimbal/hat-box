require 'json'
require 'pathname'

module TestPlugin
  class TestGenerator < Jekyll::Generator
    safe true
    priority :lowest

    def generate(site)
      site.collections['tools'].docs.each do |tool|
        path = tool.destination( site.dest )
        path['.html'] = '.json'
        relpath = Pathname.new(path).relative_path_from(Pathname.new(site.dest)).to_s
        FileUtils.mkdir_p(File.dirname(path))
        File.open(path, "w") do |f|
          test = {}
          test["@context"] = "http://schema.org/"
          test["@type"] = "SoftwareApplication"
          test["@id"] = site.config["url"] + site.baseurl + "/" + relpath
          test["title"] = tool.data["title"]
          f.write(test.to_json)
        end
        site.keep_files << relpath
      end
    end
  end
end
