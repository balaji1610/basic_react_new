import ArrayObject from "../ArratObject";
import BelowAboveHundred from "../BelowAboveHundered";
import MangeTwoComponent from "../MangeTwoComponents";
import MangeMulitpleComponents from "../MangeMulitpleComponents";
import NestedObjects from "../NestedObjects";
import ObjectFncounter from "../ObjectFncounter";
export default function miscellaneous() {
  return (
    <div>
      <div class="col-md-12 col-sm-12 Overall_Space">
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

        <div class="row">
          <div className="col-md-6 col-sm-6 Programm_c_ui">
            <h1>Manage Two Components</h1>
            <MangeTwoComponent />
          </div>

          <div
            className="
            col-md-6
            col-sm-6
            Programm_c_ui"
          >
            <h1>MangeMulitpleComponents</h1>
            <MangeMulitpleComponents />
          </div>
        </div>

        <div class="row">
          <div className="col-md-6 col-sm-6 Programm_c_ui">
            <h1>Nested Objects</h1>
            <NestedObjects />
          </div>

          <div className="col-md-6 col-sm-6 Programm_c_ui">
            <h1>ObjectFnCounter</h1>
            <ObjectFncounter />
          </div>
        </div>
      </div>
    </div>
  );
}
