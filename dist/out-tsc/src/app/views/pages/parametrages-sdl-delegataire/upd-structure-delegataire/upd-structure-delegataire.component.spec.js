import { async, TestBed } from '@angular/core/testing';
import { UpdStructureDelegataireComponent } from './upd-structure-delegataire.component';
describe('UpdStructureDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdStructureDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdStructureDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-structure-delegataire.component.spec.js.map