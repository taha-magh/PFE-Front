import { async, TestBed } from '@angular/core/testing';
import { UpdTabDelegataireComponent } from './upd-tab-delegataire.component';
describe('UpdTabDelegataireComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdTabDelegataireComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdTabDelegataireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upd-tab-delegataire.component.spec.js.map