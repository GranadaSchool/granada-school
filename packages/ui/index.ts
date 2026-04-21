// Shared layout components
export { default as SchoolNavbar } from './src/components/SchoolNavbar';
export { default as SchoolFooter } from './src/components/SchoolFooter';
export { default as SchoolSideNav } from './src/components/SchoolSideNav';
export type { NavItem, NavChild } from './src/components/SchoolSideNav';

// UI primitives
export { Button, buttonVariants } from './src/components/ui/button';
export { Badge, badgeVariants } from './src/components/ui/badge';
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './src/components/ui/card';

// Utilities
export { cn } from './src/lib/utils';
