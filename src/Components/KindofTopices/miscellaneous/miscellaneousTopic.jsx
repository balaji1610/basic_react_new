import ArrayObject from "../ArratObject";
import BelowAboveHundred from "../BelowAboveHundered";
export default function miscellaneous() {
  return (
    <div>
      <div class="col-md-12 col-sm-12">
        <div class="row">
          <div className="col-md-6 col-sm-6 Programm_c_ui">
            {" "}
            <h1>ARRAY OBJECT</h1>
            <ArrayObject />
          </div>

          <div className="col-md-6 col-sm-6 Programm_c_ui">
            <h1>BelowAboveHundred</h1>
            <BelowAboveHundred />
          </div>
        </div>
      </div>
    </div>
  );
}
