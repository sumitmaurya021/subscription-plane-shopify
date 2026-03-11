import '@shopify/ui-extensions/preact';
import {render} from "preact";

export default async () => {
  render(<Extension />, document.body)
};

function Extension() {
  return (
    <s-banner heading="checkout-msg" tone="warning">
      <s-button variant="secondary">Cancel</s-button>
      <s-button variant="primary">Save</s-button>
    </s-banner>
  );
}
