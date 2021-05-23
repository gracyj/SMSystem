import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DESIGNATIONService } from '../../services/designation.service';
// Import Models
import { DESIGNATION } from '../../domain/smsystem_db/designation';

// START - USED SERVICES
/**
* DESIGNATIONService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* DESIGNATIONService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of DESIGNATION
 * @class DESIGNATIONListComponent
 */
@Component({
    selector: 'app-designationlist',
    templateUrl: './designationlist.component.html',
    styleUrls: ['./designationlist.component.css']
})
export class DESIGNATIONListComponent implements OnInit {
    list: DESIGNATION[];
    search: any = {};
    idSelected: string;
    constructor(
        private designationService: DESIGNATIONService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.designationService.list().subscribe(list => this.list = list);
    }

    /**
     * Select DESIGNATION to remove
     *
     * @param {string} id Id of the DESIGNATION to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected DESIGNATION
     */
    deleteItem() {
        this.designationService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
