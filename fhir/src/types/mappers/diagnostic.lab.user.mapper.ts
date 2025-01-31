import { DiagnosticLabUserDomainModel } from "../domain.types/diagnostic.lab.user.domain.types";

import { Helper } from "../../common/helper";
import { AddressDomainModel } from "../domain.types/address.domain.types";
import { AppointmentProvisionDomainModel } from "../domain.types/appointment.domain.types";
import { OrganizationDomainModel } from "../domain.types/organization.domain.model";
///////////////////////////////////////////////////////////////////////////////////

export class DiagnosticLabUserMapper {

    public static convertJsonObjectToDomainModel = () => {

        var diagObj = Helper.readJsonResource('diagnostic.lab.user.model.json');

        var address: AddressDomainModel = {
            Type: diagObj.Address.Type != null ? diagObj.Address.Type.toLowerCase() : 'official',
            AddressLine: diagObj.Address.AddressLine ?? '',
            City: diagObj.Address.City ?? '',
            District: diagObj.Address.District ?? '',
            State: diagObj.Address.State ?? '',
            Country: diagObj.Address.Country ?? '',
            PostalCode: diagObj.Address.PostalCode ?? ''
        };

        var model: DiagnosticLabUserDomainModel = {
            id: diagObj.id,
            Prefix: diagObj.Prefix,
            FirstName: diagObj.FirstName,
            MiddleName: diagObj.MiddleName,
            LastName: diagObj.LastName,
            Phone: diagObj.Phone,
            Email: diagObj.Email,
            Gender: diagObj.Gender,
            BirthDate: diagObj.BirthDate,
            Address: address,
            Locality: diagObj.Locality,
            AppointmentDetails: diagObj.AppointmentDetails

        }

        return model;
    }

    // static toDetailsDto = async (patient: Patient): Promise<PatientDetailsDto> => {

    //     if(patient == null){
    //         return null;
    //     }

    //     var userRepo = new UserRepo();
    //     const user = await userRepo.getById(patient.UserId);

    //     var addressRepo = new AddressRepo();
    //     const address = await addressRepo.getByUserId(user.id);

    //     var dto: PatientDetailsDto = {
    //         id: patient.id,
    //         UserId: user.id,
    //         DisplayId: patient.DisplayId,
    //         EhrId: patient.EhrId,
    //         UserName: user.UserName,
    //         Prefix: user.Prefix,
    //         FirstName: user.FirstName,
    //         MiddleName: user.MiddleName,
    //         LastName: user.LastName,
    //         DisplayName: user.DisplayName,
    //         Gender: user.Gender,
    //         BirthDate: user.BirthDate,
    //         Age: user.Age,
    //         Phone: user.Phone,
    //         Email: user.Email,
    //         ImageResourceId: user.ImageResourceId,
    //         ActiveSince: user.ActiveSince,
    //         IsActive: user.IsActive,
    //         LastLogin: user.LastLogin,
    //         DefaultTimeZone: user.DefaultTimeZone,
    //         CurrentTimeZone: user.CurrentTimeZone,
    //         Address: address,
    //         MedicalProfile: null, //PatientMedicalProfileDto;
    //         Insurances: [], //PatientInsuranceDto[];
    //         EmergencyContacts: [], // PatientEmergencyContactDto[];
    //     };
    //     return dto;
    // }

    // static toDto = async (patient: Patient): Promise<PatientDto> => {

    //     if(patient == null){
    //         return null;
    //     }

    //     var userRepo = new UserRepo();
    //     const user = await userRepo.getById(patient.UserId);

    //     var dto: PatientDto = {
    //         id: patient.id,
    //         UserId: user.id,
    //         DisplayId: patient.DisplayId,
    //         EhrId: patient.EhrId,
    //         DisplayName: user.DisplayName,
    //         UserName: user.UserName,
    //         Phone: user.Phone,
    //         Email: user.Email,
    //         Gender: user.Gender,
    //         BirthDate: user.BirthDate,
    //         Age: user.Age,
    //     };
    //     return dto; 
    // }
}