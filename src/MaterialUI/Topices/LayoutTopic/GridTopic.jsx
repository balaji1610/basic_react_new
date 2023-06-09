import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function GridTopic() {
  const mobile = useMediaQuery("(min-width:600px)");

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
      <Grid
        container
        columns={12}
        spacing={5}
        direction={mobile ? "row" : "column"}
      >
        <Grid
          item
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
         order={mobile ? "1" : "2"}
          xs={8}
        >
          <div>
            {console.log(mobile, "mobile")}
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
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          alignSelf='center'
          order={mobile ? "2" : "1"}
          xs={4}
        >
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
