class ContactController < ApplicationController
  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      ContactMailer.message(@contact).deliver_now
    end
  end
end
