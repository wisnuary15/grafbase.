const axios = require ("axios");
const uploadImage = require ("../lib/uploadImage.js");

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	conn.deep_fake_AI = conn.deep_fake_AI ? conn.deep_fake_AI : {};
	if (m.sender in conn.deep_fake_AI) {
		return m.reply("_Please wait, you have undone job._");
	}
	const q = m.quoted ? m.quoted : m;
	const mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!/image\/(jpe?g|png)/.test(mime)) {
		return conn.reply(m.chat, 
			`• *Example :* reply/send image with caption *${usedPrefix + command}*`,
		m);
	}
if (!text) return conn.reply(m.chat, `style not exist Here available styles

1. cutie_9
2. beauty_girl_39
3. independence_day_3
4. independence_day_2
5. wonderland
6. pretty_girl_8
7. bride_59
8. hijab_25
9. independence_day
10. pretty_girl_7
11. couple_in_love_12
12. pretty_girl_2
13. pretty_girl_4
14. couple_in_love_17
15. beauty_girl_29
16. beauty_girl_35
17. beauty_girl_45
18. couple_love_49
19. beauty_girl_21
20. bride_79
21. hijab_cutie_22
22. lovely_couple_14
23. bride_girl
24. hijab_cutie_16
25. lovely_girl_2
26. dancing_girl_13
27. hottie_girl_34
28. lovely_hijab_girl_45
29. hijab_16
30. girl_wears_hijab_41
31. cutie_girl_5
32. lovely_girl_47
33. beauty_girl_46
34. lovely_hijab_girl_2
35. beautiful_girl_with_iphone
36. beauty_girl_28
37. bride_48
38. singing_girl_5
39. sweet_hijab_girl_43
40. lovely_couple_12
41. hottie_girl_36
42. beauty_girl_2
43. cutie_girl_4
44. lovely_hijab_girl_48
45. couple_in_love_20
46. boy_with_iphone
47. lovely_girl_24
48. hijab_on_girl_20
49. beauty_girl_13
50. bride_64
51. handsome_boy_19
52. beauty_beauty_dance_10
53. lovely_hijab_girl_47
54. sunshine_boy
55. dancing_cutie
56. cutie_16
57. bride_68
58. beauty_girl
59. lovely
60. hijab_cute_girl_30
61. white_not
62. cutie_15
63. girl_wears_hijab_31
64. girl_singing_32
65. gaun_pengantin_pria
66. lovely_cutie_22
67. beauty_beauty_dance_6
68. lovely_cutie_26
69. begini_batem_remix
70. hijab_cutie_24
71. lovely_hijab_girl_6
72. girl_wears_hijab_32
73. sweet_hijab_girl_21
74. not_dancing
75. hottie_girl_41
76. blue_wedding_dress
77. beauty_girl_8
78. elegant_girl
79. bride_86
80. lovely_girl_39
81. dancing_girl_4
82. girl_wears_hijab_22
83. cat_2
84. dancing_girl_19
85. lovely_hijab_girl_19
86. hijab_on_girl_5
87. lovely_cutie_6
88. lovely_hijab_girl_34
89. lovely_girl_33
90. girl_with_hijab_3
91. hijab_on_girl_39
92. lovely_girls_24
93. hottie_girl_27
94. heart_heart_heart
95. traditional_clothing2
96. black_not
97. singing_cute_girl_2
98. hottie_girl_3
99. butterfly
100. hijab_cutie_19
101. sweet_hijab_girl_5
102. lovely_hijab_girl_35
103. sunshine_boy2
104. singing_girl_3
105. lovely_beauty_2
106. beauty_bride
107. dancing_not
108. girl_wears_hijab_18
109. lovely_girls_14
110. hijab_cutie
111. hijab_on_girl_15
112. begini_batem_remix_3
113. clothes_transition
114. sweet_hijab_girl_10
115. lovely_girls_7
116. hijab_girl_8
117. hijab_on_girl_22
118. hottie_girl_4
119. lovely_girls_9
120. colorful_bridal_makeup1
121. lovely_cutie_43
122. not_singing
123. lovely_hijab_girl_13
124. sexy_hot_girl_109
125. sweet_hijab_girl_15
126. lovely_hijab_girl_44
127. not_not_not
128. cat
129. holding_flowers
130. singing_girl
131. singing_girl_11
132. cutie_girl_14
133. dino_song_2
134. hijab_cute_girl_25
135. hijab_cute_girl_38
136. sweet_hijab_girl_39
137. cutie
138. cutie_dance
139. girl_wears_hijab_29
140. lovely_girls_17
141. lovely_beauty
142. hijab_cute_girl_22
143. girl_on_the_hill_alone
144. ng_3
145. not_not
146. hijab_cute_girl_29
147. girl_wears_hijab_17
148. sexy_dancing_hottie_8
149. singing_beauty_2
150. seaside_style_1
151. jilbab_wanita_2
152. lovely_hijab_girl_32
153. bling_bling_girl
154. lovely_girls_4
155. jilbab_wanita_10
156. hijab_cute_girl_11
157. singing_girl_10e
158. hijab_cute_girl_43
159. not_singing_2
160. girl_wears_hijab_50
161. girl_in_the_mirror
162. girl_with_iphone
163. cute_girl
164. girl_in_purple_clothes
165. hijab_on_girl_334
166. singing_girl_6
167. say_yeees
168. girl_wears_hijab_16
169. hijab_cutie_17
170. cutie_dance_2
171. girl_with_hijab_33
172. black_clothes_girl
173. cutie_frog
174. hijab_cute_girl_19
175. unaa_unaa
176. cutie_gal_31
177. sweet_hijab_girl_37
178. bride_65
179. girl_wears_hijab_44
180. notnot_purple
181. lovely_girls_36
182. girl_wears_hijab_28
183. lovely_girls
184. hijab_on_girl
185. lovely_girls_3
186. cute_girl3
187. graduation_photo
188. independence_day_7
189. lee
190. wednesday
191. sad_girl
192. independence_day_6
193. 007_girl
194. rome
195. pretty_girl_15
196. independence_day_5
197. independence_day_4
198. pretty_girl_11
199. pretty_girl_5
200. pretty_girl_13
201. doll
202. joker
203. muscle_guy_15
204. pretty_girl_10
205. korea_filter_23
206. beauty_girl_36
207. barbie_girl
208. couple_love_10
209. muscle_guy_3
210. muscle_guy_7
211. korea_filter_15
212. barbie_girl_2
213. korea_filter_5
214. beauty_girl_31
215. wedding_day_9
216. muscle_guy_12
217. beauty_girl_24
218. couple_love_41
219. cutie_51
220. beauty_girl_22
221. lovely_girl_23
222. beauty_girl_27
223. cutie_friends_4
224. lovely_cutie_50
225. dancing_cutie_15
226. beauty_girl_15
227. lovely_cutie_45
228. korea_filter_17
229. beauty_girl_14
230. korea_filter_14
231. korea_filter_6
232. couple_in_love_24
233. hottie_girl_44
234. beauty_girl_25
235. cutie_2
236. dancing_girl_10
237. love_couple_14
238. beauty_girl_9
239. wedding_dress_2
240. couple_love_40
241. korea_filter_3
242. korea_filter_4
243. cutie_34
244. wedding_memory_2
245. korea_filter_10
246. korea_filter
247. couple_love_33
248. couple_love_48
249. lovely_girl_36
250. dancing_boy_2
251. hottie_girl_14
252. muscle_guy_11
253. korea_filter_16
254. hottie_girl_22
255. korea_filter_2
256. lovely_couple_24
257. girl_on_a_boat
258. dancing_cutie_8
259. hottie_girl_17
260. lovely_girl_8
261. cutie_29
262. beauty_girl_3
263. cat_not
264. princess_and_prince
265. love_couple_15
266. wedding_memory_10
267. lovely_girl_49
268. hottie_girl_19
269. couple_love_7
270. dancing_girl_20
271. lovely_cutie_9
272. lovely_girl_27
273. lovely_cutie_33
274. dancing_girl_2
275. hijab_girls_2
276. lovely_couple_21
277. lovely_cutie_24
278. dancing_cutie_12
279. lovely_couple_40
280. phone_boy
281. lovely_couple_36
282. couple_love_43
283. lovely_girl_15
284. wedding_photo
285. dancing_girl_8
286. dancing_girl_24
287. lovely_couple_39
288. couple_in_love_45
289. lovely_girl_14
290. lovely_girls_8
291. lovely_cutie_48
292. couple_love_31
293. lovely_girls_27
294. hottie_girl_31
295. dancing_girl_22
296. lovely_girl_6
297. hottie_girl_25
298. cutie_14
299. lovely_cutie_21
300. dancing_girl_15
301. dancing_girl_12
302. love_me_love_you
303. hottie_girl_20
304. friends_together_6
305. begini_batem_remix_4
306. couple_love_39
307. love_couple_5
308. lovely_cutie_40
309. couple_photoshot_2
310. leave_the_door_open
311. dancing_cutie_17
312. dancing_cutie_31
313. couple_love_29
314. lovely_cutie_2
315. dancing_cutie_9
316. couple_love_5
317. lovely_cutie_10
318. dancing_cutie_27
319. lovely_cutie_25
320. lovely_lovely_friend_3
321. lovely_couple_19
322. cutie_45
323. cutie_17
324. cutie_friends_7
325. lovely_cutie_12
326. couple_in_love_39
327. lovely_cutie_47
328. dancing_cutie_30
329. age_change
330. lovely_cutie_28
331. lovely_cutie_13
332. lovely_girls_21
333. lovely_cutie_8
334. couple_in_love_42
335. lovely_couple_26
336. lovely_couple_16
337. hottie_girl_6
338. dancing_cutie_4
339. lovely_cutie_44
340. couple_in_love_23
341. take_a_video_with_your_boyfriend
342. couple_love_46
343. cutie_3
344. cutie_37
345. cutie_girl_37
346. dancing_cutie_16
347. lovely_cutie_23
348. lovely_cutie
349. couple_love_16
350. girl's_singing_3
351. sexy_sexy_girl_52
352. lovely_cutie_27
353. girl_in_green_dress_with_flowers
354. dancing_cutie_24
355. girl_with_hijab_2
356. lovely_couple_32
357. yellow_filter_not
358. cutie_32
359. lovely_cutie_18
360. couple_love_24
361. sexy_hot_girl
362. cutie_girl_28
363. cutie_47
364. cutie_girl_11
365. lovely_cutie_16
366. girl's_singing_8
367. cutie_girl
368. cutie_girl_8
369. sweet_hijab_girl_20
370. fairy
371. cutie_girl_22
372. make_you_look_2
373. cutie_12
374. feels
375. girl's_dancing_13
376. couple_love_32
377. dancing_dancing_girl_8
378. cutie_10
379. cutie_gal_28
380. lovely_7
381. gabriel_prince
382. sexy_dancing_hottie_4
383. cutie_7
384. hot_transition_girl_2
385. lovely_girls_25
386. sexy_singing_hottie_29
387. girl's_singing_20
388. sexy_singing_hottie_19
389. made_you_look!!_2
390. sexy_singing_hottie_20
391. lovely_girls_33
392. lovely_girls_20
393. dancing_beauty_34
394. sexy_dancing_hottie_12
395. dancing_beauty_33
396. sexy_sexy_girl_13
397. lovely_ng
398. dancing_sexy_girl_13
399. sexy_dancing_hottie
400. cutie_28
401. made_you_look!!_9
402. singing_man
403. cutie_girl_25
404. purple_girl
405. sexy_singing_hottie_13
406. cutie_13
407. cutie_gal_24
408. dancing_cutie_14
409. dancing_cutie_2
410. dancing_cutie_20
411. girl_singing_3
412. dancing_cute_girl
413. two_cutie_girls
414. cutie_gal_32
415. sexy_singing_hottie_21
416. girl's_dancing_39
417. dancing_with_your_best_friend_3
418. lovely_girls_26
419. moon_girl
420. cutie_gal_8
421. cutie_girl_10
422. cutie_gal_33
423. sexy_singing_hottie_38
424. sexy_dancing_girl_15
425. cute_hot_girl
426. couple_in_lovers_pack
427. iphone_with_girl
428. singing_girl_12
429. gesture_dance_1
430. girl_in_flower_dress
431. not_not_dance
432. one_night
433. bear
434. oh，beauty
435. dancing_lady_5
436. sexy_hot_girl_102
437. blue_grid
438. dancing_dancing_girl_3
439. cutie_gal_3
440. sexy_hot_girl_115
441. gucci_on_4
442. cutie_4
443. girl's_dancing_28
444. elegant_girl_2
445. hot_transition_girl_11
446. beauty_beauty_dance_37
447. lovely_girls_6
448. hot_transition_girl_4
449. dino_song
450. peach
451. gucci_on_2
452. gabriel_prince_and_princess
453. cutie_girl_13
454. dancing_dancing_girl_20
455. hijab_15
456. girl_wears_hijab_24
457. pretty_hijab_girl
458. hijab_3
459. hijab_32
460. hijab
461. lovely_hijab_girl_31
462. lovely_hijab_girl_7
463. hijab_27
464. hijab_29
465. hijab_cutie_25
466. hijab_23
467. let's_dance_6
468. hijab_18
469. hijab_on_girl_28
470. girl_with_hijab_26
471. girl_with_hijab_61
472. lovely_hijab_girl_37
473. hijab_cutie_8
474. hijab_girl_38
475. girl_with_hijab_62
476. girl_wears_hijab_21
477. hijab_11
478. hijab_on_girl_29
479. girl_with_hijab_37
480. hijab_19
481. lovely_hijab_girl_43
482. lovely_hijab_girl_12
483. hijab_on_girl_32
484. hijab_cutie_29
485. hottie_girl_26
486. girl_with_hijab_34
487. hijab_on_girl_40
488. lovely_hijab_girl_8
489. hijab_cute_girl_35
490. hijab_on_girl_37
491. singing_hijab_girl
492. girl_with_hijab
493. hijab_on_girl_23
494. hijab_girl_42
495. jilbab_wanita_11
496. hijab_cutie_14
497. lovely_girl_18
498. hijab_on_girl_41
499. hijab_cute_girl_14
500. girl_wears_hijab_26
501. hijab_on_girl_4
502. hijab_girl_29
503. hijab_cute_girl_40
504. hijab_2
505. hijab_7
506. hijab_cute_girl_31
507. hijab_cute_girl_39
508. girl_wears_hijab_11
509. hijab_cutie_7
510. girl_with_hijab_27
511. hijab_on_girl_36
512. girl_wears_hijab_4
513. girl_wears_hijab_36
514. hijab_girl_19
515. girl_with_hijab_68
516. hijab_on_girl_21
517. lovely_hijab_girl_28
518. cutie_gal_7
519. lovely_hijab_girl_26
520. lovely_hijab_girl_18
521. hijab_cute_girl_17
522. sweet_hijab_girl_26
523. lovely_hijab_girl_33
524. girl_with_hijab_4
525. lovely_hijab_girl_3
526. hijab_girl_49
527. hijab_girl_5
528. girl_wears_hijab_40
529. hijab_10
530. hijab_tutorial
531. girl_with_hijab_31
532. hijab_on_girl_24
533. hijab_on_girl_11
534. girl_with_hijab_6
535. girl_wears_hijab
536. girl_wears_hijab_20
537. hijab_on_girl_26
538. hijab_cute_girl_45
539. heart_girl
540. lovely_hijab_girl_40
541. hijab_cute_girl_41
542. lovely_hijab_girl_10
543. hijab_cutie_11
544. sweet_hijab_girl_22
545. lovely_hijab_girl_21
546. jilbab_wanita_14
547. hijab_cute_girl_27
548. singing_girl_2
549. girl's_dancing_4
550. girl_wears_hijab_42
551. hijab_cutie_15
552. girl_with_hijab_53
553. hijab_on_girl_27
554. hijab_cute_girl_2
555. girl_wears_hijab_47
556. sweet_hijab_girl_11
557. sweet_hijab_girl_29
558. hijab_girl_10
559. hijab_on_girl_14
560. lovely_hijab_girl_25
561. girl_with_hijab_42
562. lovely_beauty_3
563. lovely_hijab_girl
564. girl_wears_hijab_33
565. girl_with_hijab_14
566. girl_wears_hijab_37
567. hijab_cutie_9
568. hijab_girl_20
569. hijab_cute_girl_5
570. hijab_transition
571. hijab_cute_girl_47
572. lovely_hijab_girl_36
573. girl_with_hijab_43
574. hijab_cutie_2
575. hijab_cute_girl_34
576. girl_with_hijab_5
577. hijab_girl_4
578. hijab_cutie_5
579. happy_birthday2
580. sweet_hijab_girl_41
581. sweet_hijab_girl_23
582. hijab_cute_girl_33
583. sweet_hijab_girl_46
584. hijab_on_girl_16
585. girl_with_hijab_45
586. girl_with_hijab_10
587. girl_with_hijab_25
588. hijab_cute_girl_46
589. lovely_hijab_girl_46
590. sweet_hijab_girl_19
591. lovely_hijab_girl_9
592. hijab_cute_girl_42
593. hijab_on_girl_7
594. hijab_cutie_4
595. lovely_hijab_girl_27
596. hijab_on_girl_17
597. hijab_girl_51
598. hijab_cute_girl_32
599. hijab_tutorial_2
600. girl_wears_hijab_48
601. hijab_girl_43
602. hijab_on_girl_30
603. hijab_cute_girl_28
604. hijab_girl_44
605. girl_with_hijab_32
606. sweet_hijab_girl_13
607. girl_with_hijab_54
608. hijab_girl_11
609. hot_transition_girl_7
610. jilbab_wanita_22
611. lovely_hijab_girl_11
612. hijab_girl_23
613. hijab_girl_15
614. girl_with_hijab_59
615. hijab_girl_41
616. hijab_on_girl_19
617. sweet_hijab_girl_45
618. hijab_on_girl_25
619. lovely_hijab_girl_4
620. girl_with_hijab_7
621. hijab_cute_girl_24
622. sweet_hijab_girl_35
623. hijab_cutie_10
624. sweet_hijab_girl_40
625. girl_wears_hijab_49
626. jilbab_wanita_16
627. hijab_girl_7
628. jilbab_wanita_18
629. girl_with_hijab_39
630. jilbab_wanita_17
631. hijab_on_girl_6
632. hijab_cute_girl_23
633. girl_wears_hijab_13
634. hijab_cute_girl_44
635. jilbab_wanita_19
636. girl_with_hijab_29
637. wedding_day_11
638. couple_love_50
639. couple_love_30
640. lovely_couple_35
641. wedding_day_13
642. lovely_couple_3
643. couple_love_20
644. wedding_memory_4
645. dulu_something
646. couple_love_26
647. couple_in_love_48
648. couple_in_love_40
649. lovely_couple_2
650. couple_in_love_44
651. pengantin_baru_yang_manis23
652. couple_love_12
653. dancing_with_your_friend_17
654. lovely_couple_25
655. love_couple_3
656. friend_love
657. take_a_video_with_your_friend
658. lovely_couple_15
659. sky_wheel
660. wedding_day_3
661. couple_in_love_43
662. lovely_couple_22
663. couple_love_13
664. couple_love_45
665. love_couple_6
666. couple_love_4
667. couple_singing
668. couple_in_love_36
669. couple_love_28
670. couple_in_love_29
671. lovely_couple_31
672. cutie_friends_6
673. lovely_couple_20
674. lovely_couple_13
675. love_couple_2
676. cutie_friends
677. happy_wedding_day_2
678. lovelies
679. friends'_dancing
680. sweet_boy_and_girl
681. lovely_couple_6
682. lovely_couple_9
683. dancing_with_your_friend_20
684. lovely_couple_7
685. couple_in_love_21
686. let's_have_fun_3
687. princess_and_prince_3
688. lovely_couple_4
689. couple_love_18
690. love_couple_18
691. couple_in_love_14
692. cutie_friends_8
693. dancing_with_your_friend_5
694. hijab_friends
695. sweet_couple_on_the_sofa
696. love_couple
697. couple_in_love_49
698. friends_love
699. couple_in_love_19
700. couple_in_love_8
701. lovely_couple_5
702. lovely_couple_29
703. wedding_day_7
704. couple_love_6
705. lovely_couple_18
706. couple_in_love_25
707. dancing_with_your_friend_50
708. couple_love_9
709. lovely_couple_8
710. couple_love_15
711. couple_love_2
712. hijab_friends_2
713. cutie_friends_2
714. couple_love_35
715. yellow_couple
716. couple_in_love_37
717. wedding_day_2
718. dancing_with_your_friend_11
719. heart_couple
720. gesture_dance_2
721. couple_love_42
722. dancing_with_your_friend_13
723. ootd
724. fahmi_and_unaa
725. friend_love_3
726. two_friends
727. couple_in_love_31
728. love_couple_4
729. couple_in_love_33
730. wedding_day_12
731. couple_love_23
732. hijab_friends_3
733. let's_have_fun_5
734. cutie_friends_5
735. wedding_day
736. two_dancing_girls
737. dancing_with_your_friend
738. couple_love_25
739. love_couple_13
740. lovely_lovely_friend_25
741. pengantin_baru_yang_manis10
742. romantic_love_2
743. dancing_with_your_friend_35
744. lovely_lovely_friend_16
745. couple_in_love_38
746. couple_in_love_13
747. lovely_lovely_friend_24
748. two_friends_3
749. finger_love
750. kiss_your_lover
751. lovely_friends_3
752. yellow_and_red
753. friends
754. dancing_with_your_friend_19
755. two_friends_5
756. two_girls_ting_ting_ting
757. lovely_lovely_friend_19
758. unaa_and_her_friend
759. two_friends_2
760. cute_and_love
761. wedding_day_16
762. dancing_with_your_friend_46
763. two_hijab_friends
764. dancing_with_your_best_friend_2
765. friends_together_4
766. lovely_friends
767. let's_have_fun_4
768. lovely_friends_15
769. lovely_lovely_friend_14
770. couple_in_love_46
771. friends_together_5
772. lovely_friends_5
773. two_hijab_girls_3
774. two_hijab_friends_3
775. dancing_with_your_friend_23
776. lovely_couple_41
777. lovely_sweet_couple
778. beauty_girl_33
779. hijab_31
780. pretty_girl_3
781. muscle_guy_9
782. pretty_girl
783. dj_dum_dee_dum_bass_horeg2
784. muscle_guy_4
785. lovely_couple_11
786. hijab_26
787. hijab_28
788. hijab_30
789. lovely_couple_27
790. boy_photo
791. hottie_girl_28
792. korea_filter_19
793. korea_filter_21
794. hijab_22
795. hijab_21
796. lovely_hijab_girl_39
797. korea_filter_20
798. lovely_couple_38
799. ai_pregnancy_filter
800. korea_filter_18
801. hijab_24
802. lovely_girl_31
803. lovely_couple
804. lovely_hijab_girl_30
805. hijab_cutie_13
806. beauty_girl_16
807. lovely_girl_17
808. ai_pregnancy_filter_2
809. lovely_girl_48
810. lovely_couple_23
811. korea_filter_11
812. hijab_20
813. korea_filter_12
814. lovely_girl_38
815. hijab_cutie_26
816. hijab_17
817. korea_filter_13
818. hottie_girl_35
819. lovely_hijab_girl_24
820. beauty_girl_6
821. hijab_cutie_20
822. hijab_8
823. hijab_13
824. lovely_girl_45
825. hijab_5
826. handsome_man
827. hijab_cutie_23
828. hijab_cutie_27
829. korea_filter_7
830. sweet_love_2
831. lovely_hijab_girl_29
832. lovely_girl
833. hijab_cutie_28
834. hijab_cutie_21
835. hijab_14
836. hottie_girl_33
837. lovely_couple_37
838. pengantin
839. bride_birde_transition
840. elegant_bride_8
841. noble_bridal_makeup3
842. lovely_couple_17
843. heart
844. elegant_bride_11
845. bride_45
846. wedding_day_21
847. bride_walk
848. couple_in_love_5
849. indonesia_wedding_couple
850. wedding_memory_7
851. beautiful_bride
852. bride_bride
853. beautiful_bride_2
854. beauty_bride_2
855. bride_85
856. noble_bride
857. bride
858. couple_in_gold
859. bride_122
860. noble_bridal_makeup11
861. bride_bride_8
862. girl_with_hijab_64
863. yellow_bride
864. elegant_bride
865. tata_rias_pengantin_sundv11
866. bride_girl_2
867. bride_transition
868. bride_28
869. bride_92
870. sweet_love_4
871. beautiful_pengantin_11
872. cutie_gal_10
873. bride_78
874. red_bride
875. noble_bridal_makeup8
876. bride_bride_5
877. noble_bridal_makeup2
878. singing_bride
879. indonesia_bride
880. beautiful_pengantin_9
881. tata_rias_pengantin_sundv6
882. bride_video
883. bride_82
884. hijab_transition_2
885. bride_birde_transition_2
886. wedding_memory_5
887. elegant_beauty
888. elegant_beauty_3
889. elegant_bride_3
890. bride_33
891. bride_110
892. white_wedding_dress
893. beautiful_pengantin_3
894. indian_bride
895. sweet_hijab_girl_42
896. classical_bridal_makeup3
897. lovely_hijab_girl_42
898. traditional_indonesia_clothes_2
899. black_bride
900. bride_2
901. bride_bride_14
902. noble_bridal_makeup6
903. blue_bride
904. diamond_bride
905. bride_43
906. bride_bride_15
907. bride_bride_12
908. bride_bride_7
909. elegant_bride_7
910. hijab_cute_girl_15
911. green_green_bride
912. tata_rias_pengantin_sunda
913. bride_singing
914. bride_display
915. begini_batem_remix_2
916. bride_6
917. bride_in_gold
918. bride_197
919. bride_21
920. traditional_indonesia_clothes
921. bride_125
922. bride_in_black
923. bride_8
924. golden_bride
925. bride_97
926. weddinng_dress_with_flower
927. bride_bride_9
928. bride_102
929. elegant_beauty_2
930. bride_96
931. sexy_bride
932. wedding_girl
933. bride_93
934. bride_117
935. elegant_bride_4
936. bride_in_white_3
937. bride_bride_3
938. fire_bride
939. bride_114
940. gorgeous_bridal_makeup
941. bride_transition_2
942. elegant_bride_14
943. bride_98
944. elegant_beauty_4
945. bride_46
946. noble_bridal_makeup
947. india_bride
948. beauty_3
949. bride_with_flower
950. bride_84
951. bride_103
952. elegant_bride_12
953. bride_37
954. close_the_door_change
955. bride_woman_22
956. bride_woman_21
957. show__my_saree
958. trending_dance3
959. dancing_girl
960. dancing_girl_7
961. beautiful_green
962. bengali_beauty4
963. beautiful_bride3
964. turning_red
965. halamithi_habibo_cut
966. pool_muscle_man
967. beauty_dance
968. golden_scene
969. pakistan_beauty
970. attitude_man9
971. rose_&_change2
972. bride_dress10
973. bride_woman_20
974. bengali_bride
975. dance_girl
976. love_under_the_flower_field
977. it's_my_car
978. bride_woman_28
979. bride_woman_25
980. beautiful_girl14
981. motorcycle_guy
982. become_spiderman
983. my_bird
984. tattooed_man4
985. bride_dress_27
986. handsome_man11
987. strong_man
988. bride_woman_23
989. bride_dress_22
990. bodybuilder_muscular_man
991. hot_dance4
992. bride_dress_28
993. blue_saree
994. handsome_transformation
995. suit_&_car
996. bride18
997. handsome_man_9
998. motor_boy
999. cutie_boy
1000. muscle_guy_16
1001. boy_transition
1002. man_boy
1003. muscle_guy_8
1004. muscle_guy_13
1005. boy_with_different_haircut
1006. muscle_guy
1007. muscle_guy_14
1008. boy_with_handsome_face
1009. handsome_boy_boy_2
1010. muscle_guy_2
1011. handsome_boy_17
1012. id_boy
1013. muscle_guy_6
1014. muscle_guy_10
1015. nasa_boy
1016. prince_prince
1017. dancing_man
1018. handsome_boy
1019. handsome_boy_4
1020. bear_boy
1021. dacning_hot_boy_2
1022. singing_boy_3
1023. muscle_guy_5
1024. boy_on_the_street
1025. handsome_boy_2
1026. dacning_hot_boy
1027. boy_in_chaqueta
1028. boy_transition_2
1029. handsome_man_10
1030. hot_boy
1031. prince
1032. singing_boy
1033. dancing_boy
1034. boy_in_white_shirt
1035. boy_boy_boy
1036. handsome_boy_7
1037. handsome_boy_with_iphone_2
1038. handsome_man_11
1039. indonesia_boy_in_school
1040. boy_in_red_clothes
1041. singing_man_3
1042. handsome_boy_5
1043. gabriel_prince_2
1044. boy_boss
1045. dancing_boy_4
1046. strong_dance_man
1047. handsome_hanfu2
1048. boy_on_the_beach
1049. sunglasses
1050. cute_boy
1051. begini_batem_remix_5
1052. handsome_boy_13
1053. handsome_man_8
1054. hi_boy
1055. dancing_handsome_boy
1056. handsome_boy_boy
1057. dancing_man_3
1058. man_with_flower
1059. singing_boy_boy
1060. handsome_boy_with_iphone
1061. handsome_man_2
1062. handsome_boy_3
1063. beach_boy
1064. heart_boy
1065. mister_global
1066. indonesian_dancer3
1067. godaan_seragam3
1068. cutie_boy_2
1069. make_you_look
1070. chivalrous_boy
1071. handsome_boy_15
1072. flowers_for_you2
1073. cool_guy
1074. red_clothes_boy
1075. boy
1076. bar_style__1
1077. uniform_temptation
1078. singing_man_4
1079. make-up_boy
1080. godaan_seragam5
1081. boy_in_white_tape
1082. handsome_boy_boy_3
1083. dancing_man_2
1084. handsome_boy_10
1085. dancing_boy_3
1086. face_game
1087. prince_with_sunglasses
1088. handsome_guy
1089. jacket_boy
1090. sunglasses_2
1091. man_in_suit_1
1092. handsome_boy_9
1093. riyaz
1094. athletic_teenager
1095. sad_love
1096. suit_kill
1097. handsome_boy_11
1098. dancing_danicng_boy
1099. handsome_boy_6
1100. feeling
1101. plaid_shirt_girl
1102. plaid_shirt_boy_2
1103. boy_boy_boy_2
1104. handsome_boy_12
1105. cha_cha_dance
1106. godaan_seragam6
1107. tattoo
1108. singing_by_the_sea
1109. rooftop_boy
1110. flowers_for_you
1111. boy_in_blue_shirt
1112. godaan_seragam2
1113. sexy_dancing_hottie_11
1114. cutie_girl_15
1115. hottie_girl_37
1116. dancing_lady_2
1117. girl_singing_48
1118. lovely_3
1119. sexy_singing_hottie_7
1120. girl_with_flowers
1121. dancing_sexy_girl_9
1122. not_dacing
1123. dancing_girl_14e
1124. beauty_beauty_dance_11
1125. dacning_hot_girl_35
1126. beauty_beauty_girl_2
1127. cutie_cutie
1128. dance
1129. lovely_girl_7
1130. lovely_girls_38
1131. lovely_girl_9
1132. sexy_singing_hottie_14
1133. lovely_girl_3
1134. beauty_dance_2
1135. beauty_beauty_dance_20
1136. dancing_cutie_11
1137. jilbab_wanita_13
1138. cutie_dancing_girl
1139. girl_singing_40
1140. cutie_girl_43
1141. lovely_girls_44
1142. beauty_girl_30
1143. singing_beauty
1144. lovely_girls_40
1145. cutie_24
1146. girl's_dancing_37
1147. dacning_hot_girl_33
1148. cutie_girl_in_flower
1149. girl's_singing_15
1150. bear_girl
1151. singing_cute_girl_8
1152. cutie_not_not
1153. lace_clothes
1154. cutie_frog_girl
1155. lovely_girls_30
1156. sliver_girl
1157. dancing_beauty_4
1158. sexy_dancing_hottie_7
1159. singing_cute_girl_10
1160. girl_wears_hijab_45
1161. lovely_cutie_11
1162. made_you_look!!_6
1163. wedding_dress_girl_2
1164. take_a_photo
1165. hijab_cute_girl_13
1166. lovely_girls_47
1167. fairy_in_flower
1168. dancing_lady
1169. girl_singing_13
1170. singing_cute_girl_9
1171. let's_dance_7
1172. 1,_2,_3
1173. menimisu
1174. beauty_beauty_dance_24
1175. girl_in_jk_dress
1176. cutie_gal_12
1177. dancing_dancing_girl_18
1178. cutie_girl_38
1179. sexy_singing_hottie_36
1180. hottie_girl_32
1181. peach_girl
1182. made_you_look!!_3
1183. dancing_lady_4
1184. girl_with_bouquet
1185. cutie_11
1186. cute_hot_girl_5
1187. lovely_cutie_49
1188. lovely_cutie_38
1189. rainbow_girl
1190. girl's_dancing
1191. lovely_cutie_14
1192. dancing_dancing_girl_35
1193. sexy_singing_hottie_17
1194. girl's_dancing_35
1195. dancing_lady_10
1196. girl_with_iphone_in_orange
1197. cutie_notnot
1198. dancing_cutie_7
1199. cutie_49
1200. red_skirt
1201. dancing_cutie_21
1202. sexy_dancing_hottie_10
1203. girl_in_green_dress
1204. cutie_33
1205. cutie_40
1206. cutie_girl_19
1207. girl_in_white_dress
1208. two_cutie_and_sexy_girls
1209. cutie_41
1210. idol_or_not
1211. cutie_38
1212. cutie_23
1213. heart_girl_2
1214. superstar
1215. beauty_with_flower
1216. begini_batem_remix_6
1217. sexy_hot_girl_24
1218. girl_in_green
1219. tiba_tiba
1220. dancing_girl_6
1221. girl's_dancing_38
1222. cutie_girl_6
1223. rapunzel
1224. cutie_girl_with_flowers
1225. cute_hot_girl_3
1226. dancing_cutie_23
1227. cheer_leader
1228. girl_and_cat
1229. beautiful_skirt
1230. dancing
1231. cutie_gal_2
1232. sexy_hot_girl_75
1233. dancing_couple_25
1234. beautiful_gal_2
1235. lovely_girls_10
1236. cutie_girl_16
1237. pika_pika
1238. sexy_sexy_girl_62
1239. dancing_sexy_girl
1240. dongdongdong
1241. love_love
1242. blue_girl
1243. hanfu
1244. cutie_gal_15
1245. ng_frog
1246. dancing_dancing_girl_23
1247. jk_transition
1248. cute_hat_girl_2
1249. girl_singing_6
1250. ng
1251. cutie_gal_34
1252. girl_in_hat
1253. sexy_singing_hottie_33
1254. wanita_berbaju_hijau
1255. elegant_hanfu
1256. livyyrenata
1257. left_and_right
1258. make_up
1259. hot_sexy_girl_in_park
1260. jk_girl_dancing
1261. jk_girl_dancing_3
1262. beautiful_gal_3
1263. girl_singing_24
1264. cutie_kitty
1265. cute_girl_11
1266. hot_cute_girl
1267. cutie_cutie_3
1268. darari_3
1269. favorite_girl`, m)
	conn.deep_fake_AI[m.sender] = true;
	const [style = `${text}`] = args;
	const configs = {
		init_image: await uploadImage(await q.download()),
		style,
	};
	await conn.sendMessage(
		m.chat,
		{
			text: `_Deep fucking you, using ${configs["style"]} template_`,
		},
		{ quoted: m }
	);
	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/deep_fake/video",
			method: "POST",
			params: { apikey: global.rose },
			data: { ...configs },
		})
		.catch((e) => e?.response);
	const { status, message, result } = data;
	if (!status) {
		delete conn.deep_fake_AI[m.sender];
		return m.reply(message)
	}
	await conn.sendMessage(m.chat, { video: { url: result["video"] } }, { quoted: m });
	delete conn.deep_fake_AI[m.sender];
};
handler.help = ['deepfakea *<style>*'];
handler.command = /^deepfake$/i
handler["tags"] = ["diffusion"];
module.exports = handler;