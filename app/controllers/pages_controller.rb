class PagesController < ApplicationController
  def index
    respond_to :html, :css
  end
end
