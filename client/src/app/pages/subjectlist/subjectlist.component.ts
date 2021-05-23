import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { SUBJECTService } from '../../services/subject.service';
// Import Models
import { SUBJECT } from '../../domain/smsystem_db/subject';

// START - USED SERVICES
/**
* SUBJECTService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* SUBJECTService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of SUBJECT
 * @class SUBJECTListComponent
 */
@Component({
    selector: 'app-subjectlist',
    templateUrl: './subjectlist.component.html',
    styleUrls: ['./subjectlist.component.css']
})
export class SUBJECTListComponent implements OnInit {
    list: SUBJECT[];
    search: any = {};
    idSelected: string;
    constructor(
        private subjectService: SUBJECTService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.subjectService.list().subscribe(list => this.list = list);
    }

    /**
     * Select SUBJECT to remove
     *
     * @param {string} id Id of the SUBJECT to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected SUBJECT
     */
    deleteItem() {
        this.subjectService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
