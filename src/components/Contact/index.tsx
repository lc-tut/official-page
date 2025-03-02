import IntrodcutionBoxLayout from "../IntrodcutionBoxLayout";

export default function Contact() {
  return (
    <IntrodcutionBoxLayout title="お問い合わせ" scrollTargetName="#contact">
      <div className="pb-6">
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
          お問い合わせは、以下のメールアドレスまたは、LinuxClub公式XのDMまでお願いします。
        </p>
        <code className="dark:text-white">linuxclub.tut[at]gmail.com</code>
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        お問い合わせ内容によっては、返信にお時間をいただく場合がございます。
      </p>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        また、お問い合わせ内容によっては、お答えできない場合がございます。
      </p>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        予めご了承ください。
      </p>
    </IntrodcutionBoxLayout>
  );
}
