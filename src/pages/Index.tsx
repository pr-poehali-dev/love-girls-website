import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const romanticGames = [
  {
    id: 1,
    title: "Викторина о нас",
    description: "Проверим, как хорошо ты меня знаешь",
    icon: "Heart",
    color: "bg-pink-100 text-pink-600",
    image: "https://cdn.poehali.dev/files/2da7d8ad-d661-4c12-8db6-dd271d7d3239.jpg"
  },
  {
    id: 2,
    title: "Загадки о любви",
    description: "Романтичные загадки для двоих",
    icon: "Puzzle",
    color: "bg-rose-100 text-rose-600",
    image: "https://cdn.poehali.dev/files/eef5b22f-1aae-4b90-a496-fb593e7891a6.jpg"
  },
  {
    id: 3,
    title: "Наши воспоминания",
    description: "Игра на память о наших моментах",
    icon: "Camera",
    color: "bg-purple-100 text-purple-600",
    image: "https://cdn.poehali.dev/files/85393b94-cdc0-42a7-9ea4-a8100c34142d.jpg"
  }
];

const virtualGifts = [
  {
    id: 1,
    title: "Виртуальный букет",
    description: "Нежные цветы только для тебя",
    icon: "Flower2",
    emoji: "🌸"
  },
  {
    id: 2,
    title: "Звёздочка желаний",
    description: "Загадай желание, и оно сбудется",
    icon: "Star",
    emoji: "⭐"
  },
  {
    id: 3,
    title: "Воздушный поцелуй",
    description: "Нежность через экран",
    icon: "Kiss",
    emoji: "💋"
  },
  {
    id: 4,
    title: "Любовное письмо",
    description: "Тёплые слова от сердца к сердцу",
    icon: "Mail",
    emoji: "💌"
  }
];

export default function Index() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [giftSent, setGiftSent] = useState<number[]>([]);

  const handleSendGift = (giftId: number) => {
    setGiftSent([...giftSent, giftId]);
    setTimeout(() => {
      setGiftSent(prev => prev.filter(id => id !== giftId));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 font-open-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-rose-100/20" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="animate-float mb-8">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-6">
              Для неотразимой Сашеньки ✨
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Особенный уголок в интернете, созданный с любовью только для тебя
          </p>
          <div className="flex justify-center gap-4 text-4xl animate-scale-in">
            <span className="animate-pulse">💖</span>
            <span className="animate-bounce">🌹</span>
            <span className="animate-pulse">✨</span>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            Романтичные игры для нас 🎮
          </h2>
          <p className="text-gray-600">Давай поиграем вместе и создадим новые воспоминания</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {romanticGames.map((game) => (
            <Card 
              key={game.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${
                selectedGame === game.id ? 'ring-2 ring-pink-300 shadow-lg' : ''
              }`}
              onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${game.color} flex items-center justify-center shadow-lg`}>
                  <Icon name={game.icon as any} size={20} />
                </div>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-xl">{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium"
                  disabled={selectedGame !== game.id}
                >
                  {selectedGame === game.id ? 'Скоро...' : 'Играть'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Virtual Gifts Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Виртуальные подарки 🎁
            </h2>
            <p className="text-gray-600">Маленькие знаки внимания, которые согреют твоё сердце</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualGifts.map((gift) => (
              <Card key={gift.id} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${gift.id * 0.5}s` }}>
                    {gift.emoji}
                  </div>
                  <CardTitle className="font-montserrat text-lg">{gift.title}</CardTitle>
                  <CardDescription className="text-sm">{gift.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleSendGift(gift.id)}
                    disabled={giftSent.includes(gift.id)}
                    className={`w-full transition-all duration-300 ${
                      giftSent.includes(gift.id) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white'
                    }`}
                  >
                    {giftSent.includes(gift.id) ? (
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} />
                        Отправлено!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Icon name="Gift" size={16} />
                        Подарить
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Surprise Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Card className="bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200">
          <CardHeader>
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <CardTitle className="font-montserrat text-2xl text-gray-800">
              Особенный сюрприз ждёт тебя!
            </CardTitle>
            <CardDescription className="text-lg">
              Каждый день здесь будет что-то новое и удивительное
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="text-pink-600 bg-pink-100 px-6 py-2 text-lg">
              Скоро появятся новые функции ✨
            </Badge>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-rose-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-medium">
            Создано с 💖 специально для тебя
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span className="animate-pulse">💝</span>
            <span className="animate-bounce">💕</span>
            <span className="animate-pulse">💖</span>
          </div>
        </div>
      </footer>
    </div>
  );
}