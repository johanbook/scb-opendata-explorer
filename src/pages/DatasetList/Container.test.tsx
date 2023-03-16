import Container from ".";
import { ReactQueryTestProvider, TestRouter, render } from "../../test";

describe("<DatasetList />", () => {
  it("renders", () => {
    render(
      <ReactQueryTestProvider>
        <TestRouter>
          <Container />
        </TestRouter>
      </ReactQueryTestProvider>
    );
  });
});
