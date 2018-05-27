module Jekyll

  class OGDescriptionTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      output = super
      context.environments.first['page']['description'] = output
      output
    end
  end
end

Liquid::Template.register_tag('describe', Jekyll::OGDescriptionTag)
