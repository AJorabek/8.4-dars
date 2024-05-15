  import styled from "@emotion/styled";
  import Tab from "./Tab";

  const Container = styled.div`
    max-width: 320px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;
  `;

  const Tabber = () => {
    return (
      <>
        <Container>
          <div>
            <div>
              <h1 style={{ fontSize: 25,width:550,marginLeft:-50 }}>Why don't you take a challenge? <span>😏</span></h1>
            </div>
            <br /><br />
            <div style={{ display: "flex",width:350 }}>
              <Tab color="#5fb5eedb" index={0} text="Pomodoro" />
              <Tab color="#45fe3b" index={1} text="Rest" />
            </div>
          </div>
        </Container>
      </>
    );
  };

  export default Tabber;
