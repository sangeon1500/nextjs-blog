import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Github, Instagram, Youtube } from 'lucide-react';
import { ProfileImage } from '@/components/ProfileImage';

const socialLinks = [
  {
    icon: Youtube,
    href: 'https://www.youtube.com/sangeon1500',
  },
  {
    icon: Github,
    href: 'https://github.com/sangeon1500',
  },
  {
    icon: BookOpen,
    href: 'https://www.inflearn.com/users/432199/@sangeon1500',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/sangeon1500',
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <ProfileImage />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">박상언</h3>
            <p className="text-primary text-sm">Frontend Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="text-muted-foreground text-center text-sm">박상언의 블로그입니다.</p>
        </div>
      </CardContent>
    </Card>
  );
}
