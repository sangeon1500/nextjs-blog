import { Card } from '@/components/ui/card';

interface PhotoCardProps {
  id: string;
  modal?: boolean;
}

export default function PhotoCard({ id, modal }: PhotoCardProps) {
  return (
    <Card className="flex aspect-square w-sm items-center justify-center">
      <h1 className="text-2xl font-bold">
        Photo {id}, {modal ? 'modal' : 'card'}
      </h1>
    </Card>
  );
}
