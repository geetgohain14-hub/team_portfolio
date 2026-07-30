import React, { useState } from 'react';
import { weeklyPlanner, ScheduledItem } from '../data/weeklyPlannerData';
import { Calendar, Filter, Plus, Clock, User, Tag, CheckCircle2, Sparkles } from 'lucide-react';

export const WeeklyPlanner: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<ScheduledItem[]>(weeklyPlanner);
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState(false);

  // New item form state
  const [newTitle, setNewTitle] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newDay, setNewDay] = useState<ScheduledItem['day']>('Monday');
  const [newType, setNewType] = useState<ScheduledItem['contentType']>('Reel');
  const [newAssignee, setNewAssignee] = useState('Brian & Aftab');
  const [newPlatform, setNewPlatform] = useState<ScheduledItem['platform']>('Instagram');

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const types = ['All', 'Reel', 'Static Post', 'Story', 'Premium Showcase'];

  const filteredItems = scheduleItems.filter(item => {
    const matchDay = selectedDay === 'All' || item.day === selectedDay;
    const matchType = selectedType === 'All' || item.contentType === selectedType;
    return matchDay && matchType;
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newTopic) return;

    const newItem: ScheduledItem = {
      id: `custom-${Date.now()}`,
      day: newDay,
      timeSlot: '10:00 AM',
      contentType: newType,
      title: newTitle,
      topic: newTopic,
      platform: newPlatform,
      assignee: newAssignee,
      status: 'Scheduled',
      targetAudience: 'Assam Homebuyers'
    };

    setScheduleItems([...scheduleItems, newItem]);
    setNewTitle('');
    setNewTopic('');
    setShowAddForm(false);
  };

  return (
    <section id="planner" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#0f172a] mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
                16 — Interactive Planner
              </span>
              <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
                Live Content Schedule & Calendar
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950">
              7-Day Production & Publishing Calendar
            </h2>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase px-5 py-3 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Content Idea</span>
          </button>
        </div>

        {/* Filter Controls (Square Bento Bar) */}
        <div className="bento-card p-5 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Filter by Day */}
            <div>
              <label className="text-xs font-black text-slate-900 uppercase block mb-2">Filter by Day:</label>
              <div className="flex flex-wrap gap-1.5">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`text-xs font-extrabold uppercase px-3 py-1.5 border border-slate-900 transition-all ${
                      selectedDay === day ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Type */}
            <div>
              <label className="text-xs font-black text-slate-900 uppercase block mb-2">Filter by Format:</label>
              <div className="flex flex-wrap gap-1.5">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`text-xs font-extrabold uppercase px-3 py-1.5 border border-slate-900 transition-all ${
                      selectedType === type ? 'bg-orange-600 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Add Content Form Modal/Drawer */}
        {showAddForm && (
          <form onSubmit={handleAddItem} className="bento-card p-6 bg-orange-50 border-4 border-orange-500 mb-8 space-y-4 shadow-[6px_6px_0px_0px_#ea580c]">
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
              <h3 className="font-black text-lg text-slate-950 uppercase">Schedule New Content Idea</h3>
              <span className="text-xs font-extrabold text-orange-700 uppercase">Live Calendar Injector</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-extrabold text-slate-900 uppercase block mb-1">Title:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Soil Testing Guide"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-900 uppercase block mb-1">Day:</label>
                <select
                  value={newDay}
                  onChange={(e) => setNewDay(e.target.value as any)}
                  className="w-full bg-white border-2 border-slate-900 p-2 text-xs font-bold text-slate-900"
                >
                  {days.filter(d => d !== 'All').map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-900 uppercase block mb-1">Format:</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as any)}
                  className="w-full bg-white border-2 border-slate-900 p-2 text-xs font-bold text-slate-900"
                >
                  {types.filter(t => t !== 'All').map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-extrabold text-slate-900 uppercase block mb-1">Assignee:</label>
                <select
                  value={newAssignee}
                  onChange={(e) => setNewAssignee(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 p-2 text-xs font-bold text-slate-900"
                >
                  <option value="Brian & Aftab">Brian & Aftab (Production)</option>
                  <option value="Avanish & Brian">Avanish & Brian (Strategy)</option>
                  <option value="Geetartha & Vivek">Geetartha & Vivek (Post)</option>
                  <option value="Entire Team">Entire Unit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-extrabold text-slate-900 uppercase block mb-1">Topic / Brief Description:</label>
              <textarea
                required
                rows={2}
                placeholder="Key message or visual breakdown..."
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                className="w-full bg-white border-2 border-slate-900 p-2 text-xs font-medium text-slate-900"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-slate-200 text-slate-900 font-extrabold text-xs uppercase px-4 py-2 border border-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-slate-900 text-white font-extrabold text-xs uppercase px-6 py-2 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#ea580c]"
              >
                Add To Schedule
              </button>
            </div>
          </form>
        )}

        {/* Schedule Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div key={item.id} className="bento-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-2">
                  <span className="bg-slate-900 text-white font-black text-xs px-2.5 py-0.5 uppercase">
                    {item.day}
                  </span>
                  <span className="bg-orange-100 text-orange-950 font-bold text-[10px] px-2 py-0.5 border border-orange-300 uppercase">
                    {item.contentType}
                  </span>
                </div>

                <h3 className="font-black text-base text-slate-950 uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                  {item.topic}
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-200 pt-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Platform:</span>
                  <span className="font-extrabold text-slate-900">{item.platform}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Assignee:</span>
                  <span className="font-extrabold text-orange-900">{item.assignee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Status:</span>
                  <span className="bg-slate-900 text-white font-black text-[10px] px-2 py-0.5 uppercase">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
