const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: Number, required: true },
  qoutaModel: { type: Number, required: true },
  registrationNumber: { type: String, required: true },
  bodyType: { type: String, required: true },
  vendor: {
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    idCardNumber: { type: String, required: true },
    address: { type: String, required: true },
    bankDetails: {
      bankName: { type: String, required: true },
      branch: { type: String, required: true },
      acountTitle: { type: String, required: true }, 
      acountNumber: { type: String, required: true },
    },
  },
  vendorPaymentPlan: {
    totalPrice: { type: Number, required: true },
    downPayment: { type: Number, required: true },
    totalTimeInMonths: { type: Number, required: true },
    monthlyInstallment: { type: Number, required: true },
    totalMonthlyInstallmentPayment: { type: Number, required: true },
    numberOfQuarterInstallment: { type: Number, required: true },
    firstQuarterInstallment: { type: Number },
    secondQuarterInstallment: { type: Number},
    thirdQuarterInstallment: { type: Number},
    ForthQuarterInstallment: { type: Number},
    fifthQuarterInstallment: { type: Number },
    starttingDate: {
      year: { type: Number, required: true },
      month: { type: String, required: true },
      date: { type: Number, required: true },
    },
    endingDate: {
      year: { type: Number, required: true },
      month: { type: String, required: true },
      date: { type: String, required: true }, // Changed to String
    },
  },
  buyer: {
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    idCardNumber: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumer: { type: String, required: true },
  },
  buyerPaymentPlan: {
    totalPrice: { type: Number, required: true },
    downPayment: { type: Number, required: true },
    totalTimeInMonths: { type: Number, required: true },
    monthlyInstallment: { type: Number, required: true },
    totalMonthlyInstallmentPayment: { type: Number, required: true },
    numberofQuatrerInstallment: { type: Number, required: true }, 
    firstQuarterInstallment: { type: Number, required: true },
    secondQuarterInstallment: { type: Number, required: true },
    thirdQuarterInstallment: { type: Number, required: true },
    ForthQuarterInstallment: { type: Number, required: true }, 
    fiveQuarterInstallment: { type: Number, required: true }, 
    starttingDate: {
      year: { type: Number, required: true },
      month: { type: String, required: true },
      date: { type: Number, required: true },
    },
    endingDate: {
      year: { type: Number, required: true },
      month: { type: String, required: true },
      date: { type: Number, required: true }, 
    },
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
