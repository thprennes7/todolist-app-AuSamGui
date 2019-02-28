module EmailsHelper
  def is_read(id)
    @email = Email.find(id)
    @email.read == true
  end
end
