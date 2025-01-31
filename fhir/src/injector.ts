import 'reflect-metadata';
import { container, DependencyContainer } from 'tsyringe';

import { GcpStorageService } from "./providers/gcp/storage.service";
import { GcpPatientStore } from "./providers/gcp/patient.store";
import { GcpDiagnosticLabUserStore } from "./providers/gcp/diagnostic.lab.user.store";
import { GcpDoctorStore } from './providers/gcp/doctor.store';
import { GcpPharmacistStore } from './providers/gcp/pharmacist.store';
import { GcpBloodPressureStore } from "./providers/gcp/blood.pressure.store";
//import { GcpDoctorVisitStore } from "./providers/gcp/doctor.visit.store";

//////////////////////////////////////////////////////////////////////////////////////////////////

export class Injector {

    static registerInjections(container: DependencyContainer) {

        container.register('IStorageService', GcpStorageService);
        container.register('IPatientStore', GcpPatientStore);
        container.register('IDiagnosticLabUserStore', GcpDiagnosticLabUserStore);
        container.register('IDoctorStore', GcpDoctorStore);
        container.register('IPharmacistStore', GcpPharmacistStore);
        container.register('IBloodPressureStore', GcpBloodPressureStore);

        //container.register('IDoctorVisitStore', GcpDoctorVisitStore);

    }
}
