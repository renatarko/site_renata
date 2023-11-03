import * as S from "./style";

type ContainerTemplateProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerTemplateProps) {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
