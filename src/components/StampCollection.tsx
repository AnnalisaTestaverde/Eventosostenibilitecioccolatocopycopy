import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { QrCode, CheckCircle2, Circle, Sparkles, RotateCcw, Award } from 'lucide-react';
import type { UserPreferences, Stamp } from '../App';
import logo from 'figma:asset/885db78a2ded2c0ec20da72c6b81cc4dbda0f4a4.png';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface StampCollectionProps {
  preferences: UserPreferences;
  stamps: Stamp[];
  onStampCollect: (stampId: string) => void;
  onReset: () => void;
}

export function StampCollection({ preferences, stamps, onStampCollect, onReset }: StampCollectionProps) {
  const [selectedStamp, setSelectedStamp] = useState<Stamp | null>(null);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);

  const collectedCount = stamps.filter(s => s.collected).length;
  const totalCount = stamps.length;
  const isComplete = collectedCount === totalCount;

  // Personalizzazione basata sulle preferenze
  const getThemeColors = () => {
    const chocolateColors = {
      dark: { primary: 'from-amber-900 to-amber-700', accent: 'amber-800', light: 'amber-50' },
      milk: { primary: 'from-amber-600 to-amber-400', accent: 'amber-600', light: 'amber-50' },
      white: { primary: 'from-amber-300 to-amber-100', accent: 'amber-400', light: 'amber-50' },
      ruby: { primary: 'from-pink-500 to-pink-300', accent: 'pink-500', light: 'pink-50' }
    };

    const sustainabilityColors = {
      environment: 'emerald',
      social: 'teal',
      innovation: 'cyan'
    };

    return {
      chocolate: chocolateColors[preferences.chocolateType],
      sustainability: sustainabilityColors[preferences.sustainabilityFocus]
    };
  };

  const theme = getThemeColors();

  const handleStampClick = (stamp: Stamp) => {
    if (!stamp.collected) {
      setSelectedStamp(stamp);
      setShowQRScanner(true);
    }
  };

  const simulateQRScan = () => {
    if (selectedStamp) {
      onStampCollect(selectedStamp.id);
      setShowQRScanner(false);
      
      // Check if this was the last stamp
      const newCollectedCount = stamps.filter(s => s.collected).length + 1;
      if (newCollectedCount === totalCount) {
        setTimeout(() => setShowCompletionDialog(true), 500);
      }
      
      setTimeout(() => setSelectedStamp(null), 300);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${theme.chocolate.light} via-${theme.sustainability}-50 to-emerald-100 pb-20`}>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-md border-b-2 border-emerald-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Noca" className="h-12" />
              <div>
                <h2 className="text-emerald-900">Ciao, {preferences.name}! 👋</h2>
                <p className="text-sm text-emerald-700">Green Week Experience</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="text-emerald-700 hover:text-emerald-900"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className={`p-6 bg-gradient-to-r ${theme.chocolate.primary} text-white shadow-xl border-0`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl mb-1">La Tua Collezione</h3>
                <p className="text-white/90">Raccogli tutti i timbri dell'esperienza</p>
              </div>
              <div className="text-4xl">
                {isComplete ? <Award className="w-12 h-12" /> : '🎯'}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span>{collectedCount} / {totalCount}</span>
              </div>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${(collectedCount / totalCount) * 100}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-3 bg-white/20 rounded-lg text-center"
              >
                <Sparkles className="w-5 h-5 inline-block mr-2" />
                Collezione completata! 🎉
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Personalizzazione messaggio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-emerald-200"
        >
          <p className="text-emerald-800 text-center">
            {preferences.sensoryPreference === 'taste' && '👅 Preparati a esplorare sapori rivoluzionari!'}
            {preferences.sensoryPreference === 'smell' && '👃 Lasciati guidare dagli aromi del futuro!'}
            {preferences.sensoryPreference === 'touch' && '✋ Scopri la texture dell\'innovazione!'}
            {preferences.sensoryPreference === 'sight' && '👁️ Ammira la bellezza sostenibile!'}
          </p>
        </motion.div>

        {/* Stamps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {stamps.map((stamp, index) => (
              <motion.div
                key={stamp.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!stamp.collected ? { scale: 1.02 } : {}}
                whileTap={!stamp.collected ? { scale: 0.98 } : {}}
              >
                <Card
                  onClick={() => handleStampClick(stamp)}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    stamp.collected
                      ? `bg-gradient-to-br from-${theme.sustainability}-100 to-${theme.sustainability}-50 border-2 border-${theme.sustainability}-400 shadow-lg`
                      : 'bg-white/70 backdrop-blur-sm border-2 border-gray-300 hover:border-emerald-400 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-5xl ${stamp.collected ? 'filter-none' : 'grayscale opacity-40'}`}>
                      {stamp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className={stamp.collected ? `text-${theme.sustainability}-900` : 'text-gray-600'}>
                          {stamp.name}
                        </h4>
                        {stamp.collected ? (
                          <CheckCircle2 className={`w-6 h-6 text-${theme.sustainability}-600 flex-shrink-0`} />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                      <p className={`text-sm ${stamp.collected ? `text-${theme.sustainability}-700` : 'text-gray-500'}`}>
                        {stamp.description}
                      </p>
                      
                      {!stamp.collected && (
                        <div className="mt-3 flex items-center gap-2 text-emerald-600 text-sm">
                          <QrCode className="w-4 h-4" />
                          <span>Tocca per scansionare QR</span>
                        </div>
                      )}

                      {stamp.collected && stamp.timestamp && (
                        <div className="mt-2 text-xs text-gray-500">
                          Raccolto il {new Date(stamp.timestamp).toLocaleDateString('it-IT', {
                            day: 'numeric',
                            month: 'long',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Info Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-emerald-200 text-center"
        >
          <QrCode className="w-12 h-12 mx-auto mb-3 text-emerald-600" />
          <h4 className="text-emerald-900 mb-2">Come Funziona?</h4>
          <p className="text-emerald-700 text-sm max-w-2xl mx-auto">
            Visita ogni stand durante l'evento e scannerizza il codice QR per raccogliere il timbro.
            Completa tutti i {totalCount} timbri per ricevere un premio speciale! 🎁
          </p>
        </motion.div>
      </div>

      {/* QR Scanner Dialog */}
      <Dialog open={showQRScanner} onOpenChange={setShowQRScanner}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scansiona QR Code</DialogTitle>
            <DialogDescription>
              {selectedStamp?.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="mb-6"
            >
              <QrCode className="w-24 h-24 text-emerald-600" />
            </motion.div>
            
            <p className="text-center text-gray-600 mb-6">
              Inquadra il codice QR presente allo stand
            </p>

            {/* Demo: Simula scansione */}
            <div className="w-full space-y-3">
              <Button
                onClick={simulateQRScan}
                className={`w-full bg-gradient-to-r from-${theme.sustainability}-600 to-emerald-600 hover:from-${theme.sustainability}-700 hover:to-emerald-700`}
              >
                Simula Scansione (Demo)
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowQRScanner(false)}
                className="w-full"
              >
                Annulla
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Completion Dialog */}
      <Dialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              🎉 Congratulazioni! 🎉
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <Award className="w-32 h-32 text-amber-500 mb-4" />
            </motion.div>
            
            <h3 className="text-xl mb-2 text-center">Hai completato l'esperienza!</h3>
            <p className="text-center text-gray-600 mb-6">
              {preferences.name}, hai raccolto tutti i {totalCount} timbri dell'evento Green Week.
              Ritira il tuo premio speciale al desk informazioni! 🎁
            </p>

            <Button
              onClick={() => setShowCompletionDialog(false)}
              className="w-full bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-700 hover:to-emerald-700"
            >
              Fantastico! ✨
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
