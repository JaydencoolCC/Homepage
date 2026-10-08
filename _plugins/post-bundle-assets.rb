# frozen_string_literal: true

require "fileutils"

# Copy files stored beside a post into that post's generated output directory.
# This allows each post to keep its figures and other local assets in one folder.
Jekyll::Hooks.register :site, :post_write do |site|
  posts_root = File.expand_path(site.in_source_dir("_posts"))

  site.posts.docs.each do |post|
    post_path = File.expand_path(post.path, site.source)
    bundle_dir = File.dirname(post_path)
    next if bundle_dir == posts_root

    output_dir = File.dirname(post.destination(site.dest))

    Dir.children(bundle_dir).each do |entry|
      next if entry.start_with?(".") || File.join(bundle_dir, entry) == post_path

      FileUtils.cp_r(File.join(bundle_dir, entry), output_dir)
    end
  end
end
