// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { STUDENTSService } from '../../services/students.service';
import { SUBJECTService } from '../../services/subject.service';
// Import Models
import { STUDENTS } from '../../domain/smsystem_db/students';
import { SUBJECT } from '../../domain/smsystem_db/subject';

// START - USED SERVICES
/**
* STUDENTSService.create
*	@description CRUD ACTION create
*
* STUDENTSService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* STUDENTSService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SUBJECTService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a STUDENTS
 */
@Component({
    selector: 'app-studentsedit',
    templateUrl: 'studentsedit.component.html',
    styleUrls: ['studentsedit.component.css']
})
export class STUDENTSEditComponent implements OnInit {
    item: STUDENTS;
    listSubjects: SUBJECT[];
    model: STUDENTS;
    formValid: Boolean;

    constructor(
    private studentsService: STUDENTSService,
    private subjectService: SUBJECTService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new STUDENTS();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.subjectService.list().subscribe(list => this.listSubjects = list);
        });
    }

    /**
     * Check if an SUBJECT is in  Subjects
     *
     * @param {string} id Id of SUBJECT to search
     * @returns {boolean} True if it is found
     */
    containSUBJECT(id: string): boolean {
        if (!this.item.Subjects) return false;
        return this.item.Subjects.indexOf(id) !== -1;
    }

    /**
     * Add SUBJECT from STUDENTS
     *
     * @param {string} id Id of SUBJECT to add in this.item.Subjects array
     */
    addSUBJECT(id: string) {
        if (!this.item.Subjects)
            this.item.Subjects = [];
        this.item.Subjects.push(id);
    }

    /**
     * Remove an SUBJECT from a STUDENTS
     *
     * @param {number} index Index of SUBJECT in this.item.Subjects array
     */
    removeSUBJECT(index: number) {
        this.item.Subjects.splice(index, 1);
    }

    /**
     * Save STUDENTS
     *
     * @param {boolean} formValid Form validity check
     * @param STUDENTS item STUDENTS to save
     */
    save(formValid: boolean, item: STUDENTS): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentsService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentsService.create(item).subscribe(data => this.goBack());
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



