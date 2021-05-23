// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DESIGNATIONService } from '../../services/designation.service';
import { TEACHERSService } from '../../services/teachers.service';
// Import Models
import { DESIGNATION } from '../../domain/smsystem_db/designation';
import { TEACHERS } from '../../domain/smsystem_db/teachers';

// START - USED SERVICES
/**
* DESIGNATIONService.create
*	@description CRUD ACTION create
*
* DESIGNATIONService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* DESIGNATIONService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* TEACHERSService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a DESIGNATION
 */
@Component({
    selector: 'app-designationedit',
    templateUrl: 'designationedit.component.html',
    styleUrls: ['designationedit.component.css']
})
export class DESIGNATIONEditComponent implements OnInit {
    item: DESIGNATION;
    listTeachers: TEACHERS[];
    model: DESIGNATION;
    formValid: Boolean;

    constructor(
    private designationService: DESIGNATIONService,
    private teachersService: TEACHERSService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new DESIGNATION();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.designationService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.teachersService.list().subscribe(list => this.listTeachers = list);
        });
    }


    /**
     * Save DESIGNATION
     *
     * @param {boolean} formValid Form validity check
     * @param DESIGNATION item DESIGNATION to save
     */
    save(formValid: boolean, item: DESIGNATION): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.designationService.update(item).subscribe(data => this.goBack());
            } else {
                this.designationService.create(item).subscribe(data => this.goBack());
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



