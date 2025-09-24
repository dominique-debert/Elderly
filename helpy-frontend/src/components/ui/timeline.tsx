import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

interface TimelineContentProps {
  children: React.ReactNode;
  position?: 'start' | 'middle' | 'end';
  className?: string;
}

const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
  ({ children, orientation = 'vertical', className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'relative',
          orientation === 'horizontal' 
            ? 'flex items-start justify-between w-full' 
            : 'space-y-8',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ children, className, isLast = false, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          'relative',
          'lg:flex lg:flex-col lg:items-center lg:flex-1',
          'flex items-center',
          !isLast && 'lg:after:content-[""] lg:after:absolute lg:after:top-8 lg:after:left-full lg:after:w-full lg:after:h-px lg:after:bg-border lg:after:transform lg:after:-translate-y-1/2',
          className
        )}
        {...props}
      >
        {children}
        {!isLast && (
          <div className="absolute left-8 top-12 h-8 w-px bg-border lg:hidden" />
        )}
      </li>
    );
  }
);
TimelineItem.displayName = 'TimelineItem';

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ children, position = 'end', className, ...props }, ref) => {
    const getPositionClasses = (pos: string) => {
      switch (pos) {
        case 'start':
          return 'lg:mb-2 lg:text-center lg:w-auto lg:mr-0 mr-4 text-right flex-shrink-0 w-16';
        case 'middle':
          return 'lg:my-2 lg:mx-0 mx-4 flex-shrink-0 z-10';
        case 'end':
          return 'lg:mt-2 lg:text-center lg:ml-0 ml-4 bg-background border border-border rounded-lg p-3 shadow-sm flex-1 lg:flex-none lg:w-auto';
        default:
          return '';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(getPositionClasses(position), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineContent.displayName = 'TimelineContent';

export { Timeline, TimelineItem, TimelineContent };