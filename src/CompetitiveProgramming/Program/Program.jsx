import StringCount from "../Stringcount";
import Maskphonenumber from "../Maskphonenumber";
import ReverseString from "../Reversestring";
import Wordcount from "../WordCount";
import Revisedsequence from "../Revisedsequence";
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
          <div className="col-md-4 col-sm-4 Programm_c_ui">
            <section>
              <h5>Reverse String</h5>

              <ReverseString />
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4 Programm_c_ui">
            <section>
              <h5>Wordcount</h5>
              <Wordcount />
            </section>
          </div>
          <div className="col-md-4 col-sm-4 Programm_c_ui">
            <section>
              <code>
                {" "}
                Build a function that returns an array of integers from n to 1
                where n{">"}0. Example : n=5 [5,4,3,2,1]
              </code>

              <h5>Revisedsequence</h5>
              <Revisedsequence />
            </section>
          </div>
          <div className="col-md-4 col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}
