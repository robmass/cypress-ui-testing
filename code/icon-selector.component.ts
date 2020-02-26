// icon-selector.component.ts

@Component({
  selector: "app-icon-selector",
  templateUrl: "./icon-selector.component.html",
  styleUrls: ["./icon-selector.component.sass"]
})
export class IconSelectorComponent implements OnInit {
  @Input() currentIcon = "";

  icons = assetIcons;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  toggleSelected(icon: string) {
    this.currentIcon = icon;
  }

  close() {
    this.activeModal.close(this.currentIcon);
  }
}
