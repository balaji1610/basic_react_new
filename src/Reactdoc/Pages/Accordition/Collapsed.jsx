export default function Collapse({ id, component, title }) {
  const idNumber = "heading" + id;

  const target = "#collapse" + id;

  const controls = "collapse" + id;
  return (
    <div>
      <div class="accordion-item">
        <h2 class="accordion-header" id={idNumber}>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={target}
            aria-expanded="false"
            aria-controls={controls}
          >
            {title}
          </button>
        </h2>
        <div
          id={controls}
          class="accordion-collapse collapse"
          aria-labelledby={idNumber}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">{component}</div>
        </div>
      </div>
    </div>
  );
}
