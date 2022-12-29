import StringCount from "../Stringcount";
import Maskphonenumber from "../Maskphonenumber";
import ReverseString from "../Reversestring";
export default function program() {
  return (
    <div>
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <div className="col-md-4 col-sm-4 Programm_c_ui">
            <section>
              <h5>StringCount</h5>
              <StringCount />
            </section>
          </div>
          <div className="col-md-4 col-sm-4 Programm_c_ui ">
            <section>
              <h5>Maskphonenumber</h5>

              <Maskphonenumber />
            </section>
          </div>
          <div className="col-md-4 col-sm-4">
            <section>
              <h5>Reverse String</h5>

              <ReverseString />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
