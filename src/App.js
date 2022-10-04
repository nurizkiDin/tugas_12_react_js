import { 
  Form, Checkbox, 
  Button, Segment, Input, Message, Container, 
  Grid, Image, Header 
} from "semantic-ui-react";

function App() {
  return (
    <Container textAlign="center">
      <Grid columns={3}>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal">
              <Image 
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" 
                size="huge"
              />
              Member Login
            </Header>
            <Segment raised>
              <Form>
                <Form.Field>
                  <Input type="text" placeholder="Email address" icon="user" iconPosition="left"/>
                </Form.Field>
                <Form.Field>
                  <Input type="password" icon="lock" iconPosition="left" placeholder="Password"/>
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions"/>
                </Form.Field>
                <Button type="submit" color="teal" fluid>Login</Button>
              </Form>
            </Segment>
            <Message>
              Tidak Punya Akun? Silahkan <a href="#register">Register</a>
            </Message>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
