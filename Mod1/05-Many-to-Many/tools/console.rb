require_relative "../app/doctor.rb"
require_relative "../app/patient.rb"
require_relative "../app/doctor_patient.rb"
require "pry"

dr_strange = Doctor.new("Dr. Strange", "magic")
dr_phil = Doctor.new("Dr. Phil", "feelings")

ann = Patient.new("Ann", 30)
paul = Patient.new("Paul", 30)

binding.pry
