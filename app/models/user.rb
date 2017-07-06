class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :assignments
  has_many :roles, through: :assignments

  def full_name
    "#{first_name} #{last_name}"
  end

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role }
  end
end
