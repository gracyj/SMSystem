// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { SUBJECTService } from '../../services/subject.service';
import { STUDENTSService } from '../../services/students.service';
// Import Models
import { SUBJECT } from '../../domain/smsystem_db/subject';
import { STUDENTS } from '../../domain/smsystem_db/students';

// START - USED SERVICES
/**
* SUBJECTService.create
*	@description CRUD ACTION create
*
* SUBJECTService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* SUBJECTService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* STUDENTSService.findBySubjects
*	@description CRUD ACTION findBySubjects
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a SUBJECT
 */
@Component({
    selector: 'app-subjectedit',
    templateUrl: 'subjectedit.component.html',
    styleUrls: ['subjectedit.component.css']
})
export class SUBJECTEditComponent implements OnInit {
    item: SUBJECT;
    externalSTUDENTS_Subjects: STUDENTS[];
    model: SUBJECT;
    formValid: Boolean;

    constructor(
    private subjectService: SUBJECTService,
    private studentsService: STUDENTSService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new SUBJECT();
        this.externalSTUDENTS_Subjects = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.subjectService.get(id).subscribe(item => this.item = item);
                this.studentsService.findBySubjects(id).subscribe(list => this.externalSTUDENTS_Subjects = list);
            }
            // Get relations
        });
    }


    /**
     * Save SUBJECT
     *
     * @param {boolean} formValid Form validity check
     * @param SUBJECT item SUBJECT to save
     */
    save(formValid: boolean, item: SUBJECT): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.subjectService.update(item).subscribe(data => this.goBack());
            } else {
                this.subjectService.create(item).subscribe(data => this.goBack());
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



