import { ContainerTitile, NameSection } from "./Section.stuled";

export const Section = ({ title, children }) => {
  return (
    <ContainerTitile>
      <NameSection>{title}</NameSection>

      {children}
    </ContainerTitile>
  );
};
