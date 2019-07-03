import Link from "next/link";
import styled from "styled-components";

const ALink = styled.a`
  color: #85144b;
  font-size: 16px;
  font-family: Arial, sans-serif;
  cursor: pointer;
`;

export default function StyledLink({ href, title, as }: any) {
  return (
    <Link href={href} as={as}>
      <ALink title={title}>{title}</ALink>
    </Link>
  );
}
