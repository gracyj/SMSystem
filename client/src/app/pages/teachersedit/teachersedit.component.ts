// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TEACHERSService } from '../../services/teachers.service';
import { DESIGNATIONService } from '../../services/designation.service';
// Import Models
import { TEACHERS } from '../../domain/smsystem_db/teachers';
import { DESIGNATION } from '../../domain/smsystem_db/designation';

// START - USED SERVICES
/**
* TEACHERSService.create
*	@description CRUD ACTION create
*
* TEACHERSService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* TEACHERSService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* DESIGNATIONService.findByteachers
*	@description CRUD ACTION findByteachers
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a TEACHERS
 */
@Component({
    selector: 'app-teachersedit',
    templateUrl: 'teachersedit.component.html',
    styleUrls: ['teachersedit.component.css']
})
export class TEACHERSEditComponent implements OnInit {
    item: TEACHERS;
    externalDESIGNATION_teachers: DESIGNATION[];
    model: TEACHERS;
    formValid: Boolean;

    constructor(
    private teachersService: TEACHERSService,
    private designationService: DESIGNATIONService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new TEACHERS();
        this.externalDESIGNATION_teachers = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.teachersService.get(id).subscribe(item => this.item = item);
                this.designationService.findByTeachers(id).subscribe(list => this.externalDESIGNATION_teachers = list);
            }
            // Get relations
        });
    }


    /**
     * Save TEACHERS
     *
     * @param {boolean} formValid Form validity check
     * @param TEACHERS item TEACHERS to save
     */
    save(formValid: boolean, item: TEACHERS): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.teachersService.update(item).subscribe(data => this.goBack());
            } else {
                this.teachersService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



