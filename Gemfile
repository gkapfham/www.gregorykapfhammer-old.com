source "https://rubygems.org"

# Specify requirements {{{

# --> Security requirements:

# require most recent version of jekyll
gem "jekyll", "~> 3.8.5"

# required patched version of ffi
gem "ffi", ">= 1.9.24"

# }}}

# Specify plugins used by jekyll
group :jekyll_plugins do
  # Include standard plugins
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-auto-image'
  gem 'jekyll-include-cache'
  gem 'jekyll-scholar'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'rdiscount'
  gem 'unicode'
  # Improve performance by using native liquid parser
  gem 'liquid', github: 'Shopify/liquid', branch: 'master'
  gem 'liquid-c', github: 'Shopify/liquid-c', branch: 'master'
end
