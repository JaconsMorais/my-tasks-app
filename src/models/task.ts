import { DateFormatterLong } from "@/utils/formatters";
export default class Task {
  private id: string;
  private title: string;
  private subtitle: string;
  private expiresAt: Date;
  private isCompleted: boolean;
  private category: string;

  constructor({
    title = "Task name",
    subtitle = "Task description",
    expiresAt = new Date(),
    isCompleted = false,
    category = "normal",
    id = "",
  }) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.expiresAt = expiresAt;
    this.isCompleted = isCompleted;
    this.category = category;
  }

  getStatus() {
    if (this.isCompleted) return "completed";

    if (this.expiresAt < new Date()) return "expired";

    return "created";
  }

  getTimeRemaining() {
    console.log(this.expiresAt.getTime() - new Date().getTime());
    return this.expiresAt.getTime() - new Date().getTime();
  }

  toDateExtended() {
    if (this.expiresAt) return DateFormatterLong.format(this.expiresAt);

    return "";
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      category: this.category,
      isCompleted: this.isCompleted,
      expiresAt: this.expiresAt.toISOString(),
    };
  }
}
