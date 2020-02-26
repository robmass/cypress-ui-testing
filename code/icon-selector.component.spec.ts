// icon-selector.component.spec.ts

describe("IconSelectorComponent", () => {
  let component: IconSelectorComponent;
  let fixture: ComponentFixture<IconSelectorComponent>;
  let activeModalService: jasmine.SpyObj<NgbActiveModal>;
  let page: Page;

  beforeEach(async(() => {
    activeModalService = jasmine.createSpyObj<NgbActiveModal>([
      "close",
      "dismiss"
    ]);

    TestBed.configureTestingModule({
      imports: [TranslateTestingModule],
      declarations: [IconSelectorComponent, SvgIconComponent],
      providers: [{ provide: NgbActiveModal, useValue: activeModalService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSelectorComponent);
    component = fixture.componentInstance;
    page = new Page(fixture);
  });

  it("should call dismiss on cancel button click", () => {
    component.currentIcon = "foo";
    fixture.detectChanges();
    page.cancelBtn.click();
    expect(activeModalService.dismiss).toHaveBeenCalled();
  });

  it("should close modal with selected icon on close", () => {
    component.currentIcon = "foo";
    fixture.detectChanges();

    const bottleIconBtn = page.getIconBtn("bottle");
    bottleIconBtn!.click();
    fixture.detectChanges();

    page.selectBtn.click();

    expect(activeModalService.close).toHaveBeenCalledWith("bottle");
  });
});
