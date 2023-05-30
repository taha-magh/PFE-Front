import { async, TestBed } from '@angular/core/testing';
import { AppliquerSanctionsComponent } from './appliquer-sanctions.component';
describe('AppliquerSanctionsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AppliquerSanctionsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AppliquerSanctionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appliquer-sanctions.component.spec.js.map