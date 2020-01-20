import Link from "next/link";
import styled from "styled-components";

/* /Styled-Components */
const ALink = styled.a`
  color: #85144b;
  font-size: 16px;
  font-family: Arial, sans-serif;
  cursor: pointer;
`;
/* /Styled-Components */

export default function StyledLink({ href, title, as, prefetch }: any) {
  return (
    <Link href={href} as={as} prefetch={prefetch}>
      <ALink title={title}>{title}</ALink>
    </Link>
  );
}
