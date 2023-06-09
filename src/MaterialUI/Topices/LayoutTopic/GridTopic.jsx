import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
export default function GridTopic() {
  return (
    <div>
      <h1>Grid Systems</h1>
      <Grid container columns={12} spacing={5}>
        <Grid item xs={8}>
          <div className="itemsGrid">xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <div></div>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div className="itemsGrid">xs=8</div>
        </Grid>

        <>
          {" "}
          <Grid item xs={4}>
            <div className="itemsGrid">xs=4</div>
          </Grid>
          <Grid item xs={4}>
            <div className="itemsGrid">xs=4</div>
          </Grid>
          <Grid item xs={4}>
            <div className="itemsGrid">xs=4</div>
          </Grid>
        </>

        <>
          <Grid item xs={3}>
            <div className="itemsGrid">xs=3</div>
          </Grid>
          <Grid item xs={3}>
            <div className="itemsGrid">xs=3</div>
          </Grid>
          <Grid item xs={3}>
            <div className="itemsGrid">xs=3</div>
          </Grid>
          <Grid item xs={3}>
            <div className="itemsGrid">xs=3</div>
          </Grid>
        </>

        <>
          {" "}
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
          <Grid item xs={2}>
            <div className="itemsGrid">xs=2</div>
          </Grid>
        </>
      </Grid>

      <div className="divder"></div>
      <h1 style={{ textAlign: "center" }}>Flexbox</h1>
      <Grid container columns={12} spacing={5}>
        <Grid
          item
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
          xs={8}
        >
          <div>
            <h1>App Development Done with Lastest Technology</h1>
          </div>
          <div>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
            </h6>
          </div>
          <div>
            <Button>contact us</Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            {" "}
            <img
              src="https://www.udaantechnologies.com/images/mobile-banner/m-mobile-website-design-and-development-banner-icon.png"
              width="200vh"
              height="300vh"
            />
          </div>
        </Grid>
      </Grid>

      <div className="divder"></div>
      <h1 style={{ textAlign: "center" }}>Columns 16</h1>

      <Grid container columns={16} spacing={5}>
        <Grid item xs={8}>
          <div className="itemsGrid">xs=8</div>
        </Grid>
        <Grid item xs={8}>
          <div className="itemsGrid">xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className="itemsGrid">xs=4</div>
        </Grid>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=3</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
        <Grid item xs={2}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
      </Grid>
      <div className="divder"></div>
    </div>
  );
}
