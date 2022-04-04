class ContactMailer < ActionMailer
  # Not using this for now!

  # default from: 'dancosta.id@gmail.com'

  def message(user)
    @user = user
    @contact_message = @user.message
    mail(to: 'dancosta.id@gmail.com',
         subject: subject,
         from: @user.email)
  end
end
