class EmailsController < ApplicationController

  def index
    @emails = Email.all
  end

  def show
    @email = Email.find(params[:id])
  end

  def destroy
    @email= Email.find(params[:id])
    respond_to do |format|
      format.html do
        @email.destroy
        flash[:notice] = "Mail supprimé"
        redirect_to root_path
      end
      format.js do
        @email.destroy
        flash[:notice] = "Mail supprimé"
      end
    end
  end
end
