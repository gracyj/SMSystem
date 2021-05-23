import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { STUDENTSService } from '../../services/students.service';
// Import Models
import { STUDENTS } from '../../domain/smsystem_db/students';

// START - USED SERVICES
/**
* STUDENTSService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* STUDENTSService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of STUDENTS
 * @class STUDENTSListComponent
 */
@Component({
    selector: 'app-studentslist',
    templateUrl: './studentslist.component.html',
    styleUrls: ['./studentslist.component.css']
})
export class STUDENTSListComponent implements OnInit {
    list: STUDENTS[];
    search: any = {};
    idSelected: string;
    constructor(
        private studentsService: STUDENTSService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.studentsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select STUDENTS to remove
     *
     * @param {string} id Id of the STUDENTS to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected STUDENTS
     */
    deleteItem() {
        this.studentsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
