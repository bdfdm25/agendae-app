import ServiceItemView from "./ServiceItemView";

export default function ServiceItemContainer({ service }) {
  const { item } = service;
  return <ServiceItemView service={item} />;
}
