import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap } from 'lucide-react'
import type { PropsWithChildren } from 'react';
import type { JSX } from 'react/jsx-runtime';


interface Props extends PropsWithChildren {
    title: string;
    icon: JSX.Element;
}


export const HeroStatCard = ({title, icon, children}: Props) => {
  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
            <Zap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            {/* <div className="text-lg font-bold">Superman</div>
            <p className="text-xs text-muted-foreground">Strength: 10/10</p> */}
            {children}
        </CardContent>
    </Card>
  )
}
